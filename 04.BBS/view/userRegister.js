const template = require('./template');

module.exports.register = function() {
    return `
            ${template.header()}

<div class="container" style="margin-top: 90px;">
    <div class="row">
        <div class="col-12">
            <h3>회원 가입</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-6">
            <form action="/user/rigister" method="post">
                <table class="table table-borderless">
                    <tr>
                        <td><lavel for="uid">사용자 ID</lavel></td>
                        <td><input type="text" name="uid" id="uid"></td>
                    </tr>
                    <tr>
                        <td><lavel for="pwd"></lavel>패스워드</td>
                        <td><input type="password" name="pwd" id="pwd"></td>
                    </tr>
                    <tr>
                        <td><lavel for="pwd2"></lavel>패스워드 확인</td>
                        <td><input type="password" name="pwd2" id="pwd2"></td>
                    </tr>
                    <tr>
                        <td><lavel for="uname"></lavel>이름</td>
                        <td><input type="text" name="uname" id="uname"></td>
                    </tr>
                    <tr>
                        <td><lavel for="tel"></lavel>전화번호</td>
                        <td><input type="text" name="tel" id="tel"></td>
                    </tr>
                    <tr>
                        <td><lavel for="email"></lavel>이메일</td>
                        <td><input type="text" name="email" id="email"></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center">
                            <input class="btn-btn=primary" type="submit" value="제출">
                            <input class="btn-btn=secondary" type="reset" value="취소">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-3"></div>
    </div>  
</div>
            ${template.footer()}
    `;
}