import express from "express";
import { getAllOpenJobRoles, getJobRoleById } from "../services/JobRoleService"

export const getOpenJobRoles = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        res.render('list-job-roles.html', { roles: await getAllOpenJobRoles() });
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('list-job-roles.html');
    }
}

export const getJobRole = async (req: express.Request, res: express.Response): Promise<void> => {

    const id = req.params.id;
    const idNumber = Number(id);

    if(isNaN(idNumber)) {
        res.locals.errormessage = "Invalid job role id";
        res.render('job-role-detail.html');
    } else {
        try {
            res.render('job-role-detail.html', { jobRole: await getJobRoleById(idNumber) });
        } catch (e) {
            res.locals.errormessage = e.message;
            res.render('job-role-detail.html');
        }
    }
}