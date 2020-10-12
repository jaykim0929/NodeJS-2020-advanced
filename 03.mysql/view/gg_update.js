module.exports.updateForm = function(result) {
    return `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>girl_group Form</title>
    </head>
    <body>
        <h3>걸그룹 수정</h3>
        <hr>
        <form action="/update" method="post">
            <input type="hidden" name="_id" value="${result._id}">
            <table>
                <tr>
                    <td><label for="title">이름</label></td>
                    <td><input type="text" name="name" id="name" value="${result.name}"></td>
                </tr>
                <tr>
                    <td><label for="debut">데뷔</label></td>
                    <td><input type="text" name="debut" id="debut" value="${result.debut}"></td>
                </tr>
                <tr>
                    <td><label for="hit_song_id">히트송ID</label></td>
                    <td><input type="text" name="hit_song_id" id="hit_song_id" value="${result.hit_song_id}"></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" value="제출"></td>
                </tr>
            </table>
        </form>
    </body>
    </html>
    `;
}
