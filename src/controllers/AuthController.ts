import express from "express";
import { getToken } from "../services/AuthService";

export const getLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('loginForm.html');
}

export const postLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const token = await getToken(req.body);
        if (!token) {
            throw new Error('The login service is currently unavailable. Please try again later.');
        }
        
        req.session.token = await getToken(req.body);
        res.redirect('/job-roles');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('loginForm.html');
    }
}

export const postLogout = async (req: express.Request, res: express.Response): Promise<void> => {
    if (req.session) {
        req.session.destroy(e => {
            if (e) {
                res.locals.errormessage = 'Unable to log out. Please try again';
                res.render('list-job-roles.html');
            } else {
                res.clearCookie('connect.sid');
            }
        });
    }
    res.redirect('/');
}