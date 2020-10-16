const tplt =require('./template');
const ut = require('../util');

module.exports.list = function (navBar, data, pageNo, totalPage) {
    let trs = '';
    for (let row of data) {
        let displayTime = ut.getDisplayTime(row.modTime);
        let title = (row.replyCount == 0) ? row.title :
            `${row.title}<span class="text-danger">[${row.replyCount}]</span>`;
        trs += `<tr class="d-flex">
                    <td class="col-1" style="text-arign: center;">${row.bid}</td>
                    <td class="col-7"><a href="/04.BBS/bid/${row.bid}"><strong>${title}</strong></a></td>
                    <td class="col-1" style="text-align: center;">${row.uname}</td>
                    <td class="col-2" style="text-align: center;">${displayTime}</td>
                    <td class="col-1" style="text-align: center;">${row.viewCount}</td>
                </tr>
        `;
    }
    //page suport
    let pages = `<li class="page-item disabled">
                    <a class="page-link active" href="#" aria-lavel="Previous">
                    <span aria-hidden="true">&laquo;</span></a>
                </li>`;
    for (let page=1; page <= totalPage; page++) {
        if (page === pageNo)
            page += `<li class="page-item active" aria-current="page">
                        <span class="page-link">
                            ${page}<span class="sr-only">(current)</span>
                        </span>
                    </li>`;
        else
            pages += `<li class="page-item"><a class="page-link" href="/bbs/list/${page}"></a></li>`;
    }
    pages += `<li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span></a>
            </li>`;
    

        return `
                ${tplt.header()}
        ${navBar}
<div class="container" style="margin-top: 90px;">
    <div class="row">
        <div class="col-10">
            <h3>게시글 목록</h3>
            <hr>
        </div>
        <div class="col-1"></div>
        <div class="col-10">
            <table class="table table-condensed table-hover">
                <tr class="table-secondary d-flex">
                    <td class="col-1" style="text-align: center;"><strong>번호</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>제목</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>글쓴이</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>날짜/시간</strong></td>
                    <td class="col-1" style="text-align: center;"><strong>조회수</strong></td>
                </tr>
                ${trs}
            </table>
            <ul class="pagination justify-content-center">
                ${pages}
            </ul>
        </div>
        <div class="col-1"></div>
    </div>
</div>

                ${tplt.footer()}
    `;
}