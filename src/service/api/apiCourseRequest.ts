import * as request from "@/lib/utils/request";
import {
    getCourseStart,
    getCourseFailed,
    getCourseSuccess,
    getCourseDetailSuccess,
    getCourseDetailStart,
    getCourseDetailFailed,
    getAllCourseByUsersStart,
    getAllCourseByUsersSuccess,
    getAllCourseByUsersFailed,
}
from "@/service/reduxState/courseSlices";

import {
  getUnitStart,
  getUnitFailed,
  getUnitSuccess
}
from "@/service/reduxState/userSlices"

export const getAllCourse = async (dispatch:any) => {//truyen req user(username,password), dispatch( truyen action tu state cua login), navigate( chuyen den trang moi nhu route-dom cua react)
    dispatch(getCourseStart());
    try {
      const res = await request.get('/Courses_API/Get_AllCourses');
      dispatch(getCourseSuccess(res));//nhan du lieu tu backend
    } catch (err:any) {
      dispatch(getCourseFailed(err.response.data));
    }
  };

export const getDetailCourse = async (idCourse:any,dispatch:any) => {
  dispatch(getCourseDetailStart()); 
  try{
    const res = await request.post('/UserCourses_API/Get_DetailCourseAndUserBought',idCourse);
     dispatch(getCourseDetailSuccess(res));
  }catch (err:any) {
    dispatch(getCourseDetailFailed(err.response.data));
  }
}

export const getAllCoursesByUser = async (idUser:any,dispatch:any)=>{
  dispatch(getAllCourseByUsersStart());
  try {
    const res = await request.post('/UserCourses_API/Get_AllCoursesByUser', idUser);
     dispatch(getAllCourseByUsersSuccess(res))
  }
  catch (err:any) {
    dispatch(getAllCourseByUsersFailed(err.response));
  }
};

export const GetAllUnitsByCourse = async (data:any,dispatch:any, navigate:any) => {
  dispatch(getUnitStart());
  try {
        const res = request.post('/Unit_API/Get_AllUnitsByCourse', data);
        dispatch(getUnitSuccess(res));
        navigate("/")
      }catch (err:any) {
    dispatch(getUnitFailed(err));
  }
};