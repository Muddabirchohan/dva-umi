export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    // initialState: {
    //   user: [{ name: 'dva', id: 1 }, { name: 'antd', id: 2 }]
    //     },
  },
};
