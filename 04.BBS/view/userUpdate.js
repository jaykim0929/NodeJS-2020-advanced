  
const tplt = require('./template');

module.exports.update = function(navBar, data) {
	return `
            ${tplt.header()}
    ${navBar}

<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
            <h3>회원정보 수정</h3>
            <hr>
        </div>
        <div class="col-3"></div>
        <div class="col-6">
            <form action="/user/update" method="post" enctype="multipart/form-data">
                <input type="hidden" name="uid" value="${data.uid}">
                <input type="hidden" name="pwdHash" value="${data.pwd}">
                <table class="table table-borderless">
                    <tr>
                        <td><label for="uid">사용자 ID</label></td>
                        <td><span id="uid">${data.uid}</span></td>
                        <td rowspan="6">
                            <img src="${data.photo}" width="150">
                    </tr>
                    <tr>
                        <td><label for="pwd">패스워드</label></td>
                        <td><input type="password" name="pwd" id="pwd"></td>
                    </tr>
                    <tr>
                        <td><label for="pwd2">패스워드 확인</label></td>
                        <td><input type="password" name="pwd2" id="pwd2"></td>
                    </tr>
                    <tr>
                        <td><label for="uname">이름</label></td>
                        <td><input type="text" name="uname" id="uname" value="${data.uname}"></td>
                    </tr>
                    <tr>
                        <td><label for="tel">전화번호</label></td>
                        <td><input type="text" name="tel" id="tel" value="${data.tel}"></td>
                    </tr>
                    <tr>
                        <td><label for="email">이메일</label></td>
                        <td><input type="text" name="email" id="email" value="${data.email}"></td>
                    </tr>
                    <tr>
                        <td><label for="photo">프로필사진 변경</label></td>
                        <td colspan="2">
                            <div class="custom-file mb-3">
                                <input type="file" class="custom-file-input" id="photo" name="photo">
                                <label class="custom-file-label" for="photo">SelectFile</label>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                            <input class="btn btn-primary" type="submit" value="수정">
                            <input class="btn btn-secondary" type="reset" value="리셋">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-3"></div>
    </div>
</div>
<script>
    // Add the following code if you want the name of the file appear on select
    $(".custom-file-input").on("change", function() {
        var fileName = $(this).val().split("\\").pop();
        $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
    });
</script>
        ${tplt.footer()}
    `;
}