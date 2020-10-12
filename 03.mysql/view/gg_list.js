module.exports.gg_mainForm = function(rows) {
    let tableRow = '';
    for (let row of rows) {
        tableRow += `<tr>
                        <td>${row._id}</td>
                        <td>${row.name ? row.name: ' '}</td>
                        <td>${row.debut}</td>
                        <td>${row.hit_song_id ? row.hit_song_id: ' '}</td>
                        <td>
                            <a href="/update/${row._id}">수정</a>
                            <a href="/delete/${row._id}">삭제</a>
                        </td>
                     </tr>`;
        }
        return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>걸그룹조회</title>
</head>
<body>
    <h3>걸그룹조회</h3>
    <hr>
    <table>
        <tr>
            <th>_id</th>
            <th>가수</th>
            <th>데뷔년도</th>
            <th>히트송</th>
            <th>액션</th>
        </tr>
        ${tableRow}
    </table>
</body>
</html>
    `;
};