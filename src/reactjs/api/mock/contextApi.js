import delay from './delay';

class ContextApi {
  static getContext() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, {
          _id: '',
          _type: 'Mendix.object'
        }));
      }, delay);
    });
  }
}

export default ContextApi;
