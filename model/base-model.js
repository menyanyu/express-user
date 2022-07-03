
//所有表中表中插入 创建日期和修改日期
module.exports={
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
}