
export interface ICourseItemInfo {
    id: number;
    title: string;
    createdAtDate: Date;
    durationTime: string;
    description: string;
}

export interface ITestContext {
    keys(): string[];
    <T>(id: string): T;
}

export interface IEnvironmentType {
    production: boolean;
}

export interface IUserInfo {
    id: number;
    firstName: string;
    lastName: string;
}
