const template = require('./template');

module.exports.test = function () {
	return `
		${template.header()}
<div class="container" style="margin-top: 90px;">  
	<p>이곳에 여려분들의 컨텐츠를 채워 넣으면 됩니다.</p>
	<table class="table table-striped">
        <tr>
           <th>번호</th>
           <th>제목</th>
           <th>글쓴이</th>
           <th>날짜</th>
           <th>조회수</th>
        </tr>
    </table>
</div>
		${template.footer()}
    `;
}