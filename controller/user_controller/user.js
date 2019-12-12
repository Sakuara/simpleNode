const { pool } = require('../../config/dbCon');
const Url = require('url');
const querystring = require('querystring');

module.exports = {
    // 学生列表
    studentList: function (req, res, next) {
        console.log(Url.parse(req.url, true));
        res.end('post studentlist');
    },
    userInfo: function (req, res, next) {
        const { url, query } = req;
        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    return res.send({ success: false, msg: err.message, retcode: 400 });
                }
                connection.query('select * from student', (err, student) => {
                    if (err) {
                        return res.send({ success: false, msg: err.message, retcode: 400 });
                    }
                    res.json({
                        userList: student,
                        total: student.length,
                        retcode: 200
                    })
                });
                connection.release();
            })
        } catch (error) {
            return res.send({ success: false, msg: error, retcode: 1001 });
        }
    },
    addUser: function (req, res, next) {
        const { url, query } = req;
        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    return res.send({ success: false, msg: err.message, retcode: 400 });
                }
                let addParams = [8, 'kk', 'female', 27];
                connection.query('INSERT INTO student(id,name,sex,age) VALUES(?,?,?,?)', addParams, (err, student) => {
                    if (err) {
                        return res.send({ success: false, msg: err.message, retcode: 400 });
                    }
                    res.send({ success: true, msg: '添加成功', retcode: 200 });
                });
                connection.release();
            })
        } catch (error) {
            return res.send({ success: false, msg: error, retcode: 1001 });
        }
    },
    updateUser: function (req, res, next) {
        const { url, query } = req;
        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    return res.send({ success: false, msg: err.message, retcode: 400 });
                }
                let updateParams = [24,8];
                connection.query('UPDATE student SET age = ? WHERE id = ?', updateParams, (err, student) => {
                    if (err) {
                        return res.send({ success: false, msg: err.message, retcode: 400 });
                    }
                    res.send({ success: true, msg: '修改成功', retcode: 200 });
                });
                connection.release();
            })
        } catch (error) {
            return res.send({ success: false, msg: error, retcode: 1001 });
        }
    },
    deleteUser: function (req, res, next) {
        const { url, query } = req;
        try {
            pool.getConnection((err, connection) => {
                if (err) {
                    return res.send({ success: false, msg: err.message, retcode: 400 });
                }
                let updateParams = [8];
                connection.query('DELETE FROM student WHERE id = ?', updateParams, (err, student) => {
                    if (err) {
                        return res.send({ success: false, msg: err.message, retcode: 400 });
                    }
                    res.send({ success: true, msg: '删除成功', retcode: 200 });
                });
                connection.release();
            })
        } catch (error) {
            return res.send({ success: false, msg: error, retcode: 1001 });
        }
    },
}