import { Bars } from 'react-loader-spinner';
import css from './loader.module.css';
const Loader = () => (
  <Bars
    height="80"
    width="80"
    color="#3a4a61"
    ariaLabel="bars-loading"
    wrapperStyle={{}}
    wrapperClass={css.loader}
    visible={true}
  />
);

export default Loader;
