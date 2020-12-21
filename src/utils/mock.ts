export const getMockNewsList = () =>
  Promise.resolve({
    code: 0,
    data: {
      news: [
        {
          content: '所以是公告',
          created_at: 1608173955,
          editor: 'Admin',
          end_at: 1611197944,
          id: 4,
          is_active: true,
          news_type: 3,
          start_at: 1608173944,
          title: '某個可愛的公告',
          updated_at: 1608173955,
        },
        {
          content: '內容內容內容內容內容內容',
          created_at: 1608126604,
          editor: 'Admin',
          end_at: 1611935424,
          id: 2,
          is_active: true,
          news_type: 2,
          start_at: 1608133824,
          title: '一個標題',
          updated_at: 1608173975,
        },
      ],
      total_count: 2,
      total_page: 1,
    },
  })
