import Vue from 'vue'
import FineUploaderTraditional from 'fine-uploader-wrappers'
import Gallery from 'vue-fineuploader/gallery/index.vue'

const VueFileUploaderPlugin = {
  install(Vue, options) {
    Vue.component('VueFileUploader', {
      components: {
          Gallery
      },
      data () {
        const uploader = new FineUploaderTraditional({
          options: {
            deleteFile: {
              enabled: true,
              endpoint: 'my/upload/endpoint'
            },
            request: {
              endpoint: 'my/upload/endpoint'
            }
          }
        })

        return {
          uploader
        }
      },
      render (h) {
        return (
          <Gallery uploader={this.uploader} />
        )
      },
    })
  }
}

Vue.use(VueFileUploaderPlugin)
