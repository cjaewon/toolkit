var image = new Vue({
    el: '#main',
    data: {
        filename: '없음',
    },
    methods: {
        onFileChange(e) {
            var reader, files = e.target.files;
            var reader = new FileReader();

            var self = this;

            reader.onload = (e) => {
                var img = new Image();
                img.onload = function() {
                    self.drawToCanvas(img);
                    
                    self.filename = '있음';
                }
                img.src = event.target.result;
            };
            
            reader.readAsDataURL(files[0]);
        },

        drawToCanvas(img){
            var canvas = this.$refs.imageCanvas;

            canvas.width = img.width;
            canvas.height = img.height;
            
            canvas.style.display = 'none';

            var ctx = canvas.getContext('2d');
            ctx.drawImage(img,0,0);
        },
        toJpeg(){
            var canvas = this.$refs.imageCanvas;
            ReImg.fromCanvas(canvas).downloadJpeg();
        },
        toPng(){
            var canvas = this.$refs.imageCanvas;
            ReImg.fromCanvas(canvas).downloadPng();

        }
    },
})