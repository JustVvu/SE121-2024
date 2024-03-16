import { HeaderOnly } from '~/components/Layouts';

import Home from '~/pages/Home';
import Second from '~/pages/Second';
import Third from '~/pages/Third';

const publicRoutes = [
   { path: '/', component: Home },
   { path: '/second', component: Second },
   { path: '/third', component: Third, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
