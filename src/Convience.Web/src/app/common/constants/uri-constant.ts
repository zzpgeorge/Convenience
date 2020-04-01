export class UriConstant {

    static readonly BaseUri: string = 'https://localhost:44356/api';

    static readonly LoginUri: string = `${UriConstant.BaseUri}/login`;

    static readonly ModifySelfPasswordUri: string = `${UriConstant.BaseUri}/password`;

    static readonly RoleUri: string = `${UriConstant.BaseUri}/role`;

    static readonly UserUri: string = `${UriConstant.BaseUri}/user`;

    static readonly MenuUri: string = `${UriConstant.BaseUri}/menu`;

    static readonly TenantUri: string = `${UriConstant.BaseUri}/tenant`;

}