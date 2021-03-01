const router = require('koa-router')();
const fs = require('fs');
const qiniu = require("qiniu");



//要上传的空间名
let bucket = 'nodeupload';
let imageUrl = 'http://nodeupload.sxitw.cn'; // 域名名称
let accessKey = 'xxxx';
let secretKey = 'xxxx';
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

let options = {
    scope: bucket,
};
let putPolicy = new qiniu.rs.PutPolicy(options);
let uploadToken = putPolicy.uploadToken(mac);

let config = new qiniu.conf.Config();
config.zone = qiniu.zone.Zone_z2;
// 图片上传


router.prefix('/api/upload')
router.post('/', async function (ctx, next) {
    // ctx.body = { code: 123, ctx: ctx.request.body }


    // 图片数据流
    let imgData = ctx.request.body.imgData
    // ctx.body = { code: 123, ctx: ctx.request.body }
    // return
    // 构建图片名
    let fileName = Date.now() + '.png';
    // 构建图片路径
    let filePath = './public/tmp/' + fileName;
    //过滤data:URL
    let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
    let dataBuffer = new Buffer.from(base64Data, 'base64');
    let fsRes = function () {
        return new Promise((resolve, rejsct) => {
            fs.writeFile(filePath, dataBuffer, function (err) {
                if (err) {
                    resolve({ status: '102', msg: '文件写入失败' })
                } else {
                    let localFile = filePath;
                    let formUploader = new qiniu.form_up.FormUploader(config);
                    let putExtra = new qiniu.form_up.PutExtra();
                    let key = fileName;
                    // 文件上传
                    formUploader.putFile(uploadToken, key, localFile, putExtra, function (respErr,
                        respBody, respInfo) {
                        if (respErr) {
                            resolve({ status: '-1', msg: '上传失败', error: respErr });
                        }
                        if (respInfo.statusCode == 200) {
                            let imageSrc = imageUrl + '/' + respBody.key;
                            resolve({ status: '200', msg: '上传成功', imageUrl: imageSrc });
                        } else {
                            resolve({ status: '-1', msg: '上传失败', error: JSON.stringify(respBody) });
                        }
                        // 上传之后删除本地文件
                        // fs.unlinkSync(filePath);
                    });
                }
            });
        })
    }
    ctx.body = await fsRes()

})

module.exports = router
