const tplt = require('./template');

module.exports.write = function (navBar) {
	return `
		${tplt.header()}
        ${navBar}

<div class="container" style="margin-top: 90px;">  
    <div class="row">
        <div class="col-12">
            <h3>게시판 글쓰기</h3>
            <hr>
        </div>
        <div class="col-1"></div>
        <div class="col-10">
            <form action="/bbs/write" method="post">
                <table class="table table-borderless">
                    <tr>
                        <td><label for="title" class="col-form-label">제목</label></td>
                        <td><input type="text" name="title" id="title" class="form-control"></td>
                    </tr>
                    <tr>
                        <td><label for="content" class="col-form-label">내용</label></td>
                        <td><textarea name="content" id="content" class="form-control" rows="10"></textarea></td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: center;">
                            <input class="btn btn-primary" type="submit" value="제출">
                            <input class="btn btn-secondary" type="reset" value="취소">
                        </td>
                    </tr>
                </table>
            </form>
        </div>
        <div class="col-1"></div>
    </div>
</div>

        ${tplt.footer()}
    `;
}