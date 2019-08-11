// action creators чтобы упросить код 
export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'});
export const rnd = (payload) => ({type: 'RND', payload});