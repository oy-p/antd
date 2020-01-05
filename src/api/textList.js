import request from '../axios/index'

export function getArticles (offset = 0, limited = 10) {
    const data = {
        offset,
        limited
    }
    return request({
        url: '/api/v1/artclelist',
        method: 'post',
        data
    })
}
// export const getArticles = () => {
//     return request.post('/api/v1/articlelist')
// }