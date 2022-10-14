import { configureStore, createReducer, createAction } from '@reduxjs/toolkit'

// Valor inicial

const INITIAL_STATE = [];

// Actions

export const addUsuario = createAction("usuarios/addUsuario");
export const removeUsuario = createAction("usuarios/removeUsuario");

// Reducers

const usuarioReducer = createReducer(INITIAL_STATE, {
    [addUsuario]: (state, action) => [
        ...state,
        { id: state.length + 1, nome: action.payload }, 
    ],
    [removeUsuario]: (state, action) =>
        state.filter((u) => u.id !== action.payload),
});

// Middlewares

    const loggerMiddleware = store => next => action => {
        console.log(action);

        next(action)
    }

    const confirmMiddleware = store => next => action => {

        if(action.type === removeUsuario.type){
            if(window.confirm("Deseja realmente excluir?")){
                next(action)
            }
        }else{
            next(action)
        }
    }

// Store

export default configureStore({
    reducer: {
        usuarios: usuarioReducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(loggerMiddleware)
    .concat(confirmMiddleware),
});

