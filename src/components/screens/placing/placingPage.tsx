import Layout from '@/components/layout/Layout';

import { FC, useEffect, useState } from 'react';

const PlacingPage: FC = () => {
  useEffect(() => {
    // const data = getOrderInfoService.getOrderInfo();
    // data.then((res) => console.log(res));
  }, []);

  return <Layout title="Оформление заказа" nav={false}></Layout>;
};

export default PlacingPage;
