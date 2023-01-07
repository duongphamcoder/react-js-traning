import { CardProps } from 'components/Card/Card';
import { ContextAction } from 'constants/contextAction';
import { ActionParam, BlogPayload } from '../contexts/App/reducer';

export const setBlog = (data: BlogPayload): ActionParam => {
  return {
    type: ContextAction.SET_BLOG,
    payload: data,
  };
};

export const setLoading = (data: boolean): ActionParam => {
  return {
    type: ContextAction.SET_LOADING,
    payload: data,
  };
};

export const setUid = (data: string): ActionParam => {
  return {
    type: ContextAction.SET_USER,
    payload: data,
  };
};

export const setBlogs = (data: CardProps[]): ActionParam => {
  return {
    type: ContextAction.ADD_BLOG,
    payload: data,
  };
};
