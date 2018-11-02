var promise = null

module.exports = function () {
  if (!promise) {
    promise = new Promise(function (resolve, reject) {
      // Prepare the `script` tag to be inserted into the page
      var scriptElement = document.createElement('script')
      scriptElement.src = 'https://players.yumpu.com/hub.js'

      // Resolve promise once script has loaded
      scriptElement.onload = function () {
        resolve(window.Yumpu)
      }

      // Reject promise if an error occurs
      scriptElement.onerror = function () {
        reject(new Error('Could not load the Yumpu API'))
      }

      // Insert the `script` tag
      document.body.appendChild(scriptElement)
    })
  }

  return promise
}
