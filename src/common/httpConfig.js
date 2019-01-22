import axios from 'axios'
import React, {Component} from 'react';
import {API_DOMAIN} from "./apiDomain";

axios.defaults.baseURL = API_DOMAIN
Component.prototype.$http = axios