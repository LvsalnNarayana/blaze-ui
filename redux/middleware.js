import { authApi } from "./api/auth.api";

const customMiddleware = [
    authApi.middleware
];

export default customMiddleware;
