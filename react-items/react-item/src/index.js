import React from 'react';
import ReactDOM from 'react-dom';
import 'element-theme-default';
import Index from './page/index/Index'
import {BrowserRouter} from "react-router-dom";
  ReactDOM.render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>,
    document.getElementById('root')
  );
