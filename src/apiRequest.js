const apiReq = async (url='',optionObj=null,errMsg=null) => {
  try{
    const response = await fetch(url, optionObj);
    if(!response.ok) throw Error('Please reload the app')
  }
  catch(e){
    errMsg = e.message;
  }
  finally {
    return errMsg;
  }
}

export default apiReq;