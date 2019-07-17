let promise = null

export default function loadYumpuApi () {
  promise =
    promise ||
    new Promise((resolve, reject) => {
      // Prepare the `script` tag to be inserted into the page
      const scriptElement = document.createElement('script')
      scriptElement.src = 'https://players.yumpu.com/hub.js'

      // Resolve promise once script has loaded
      scriptElement.onload = () => {
        resolve(window.Yumpu)
      }

      // Reject promise if an error occurs
      scriptElement.onerror = () => {
        reject(new Error('Could not load the Yumpu API'))
      }

      // Insert the `script` tag
      document.body.appendChild(scriptElement)
    })

  return promise
}
