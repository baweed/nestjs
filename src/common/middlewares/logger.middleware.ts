import { Injectable, type NestMiddleware } from "@nestjs/common";

import type { NextFunction, Response, Request } from "express";


export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`Request ... ${req.method} ${req.url}`);
    next()
}