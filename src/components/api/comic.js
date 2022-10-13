import axios from "axios";
const ENDPOINT_URL = `
https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404
?format=json
&booksGenreId=001001
&outOfStockFlag=1
&applicationId=1032256076487499166
&hits=28&
`

const comicApi = {
  async getAll(query) {
    const res = await axios.get(`${ENDPOINT_URL}${query}`)
    return {
      items: res.data.Items,
      count: res.data.count,
      page: res.data.page,
      pageCount: res.data.pageCount,
    }
  }
}

export default comicApi;
