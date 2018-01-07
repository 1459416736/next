import { Component, Inject } from "@nestjs/common";
import { Setting } from "../entities/setting.entity";
import { Repository } from "typeorm";

@Component()
export class SettingService {
    /**
     * @param { Repository<Setting> } repository
     */
    constructor(@Inject('SettingRepositoryToken')
                private readonly repository: Repository<Setting>,) {
    }

    /**
     * @returns { Promise<Setting[]> }
     */
    async findAll(): Promise<Setting[]> {
        return await this.repository.find();
    }

    /**
     * @param { String } key
     *
     * @returns { Promise<Setting | undefined> }
     */
    async getSettingByKey(key: String): Promise<Setting | undefined> {
        return await this.repository
            .createQueryBuilder()
            .where('key = :key', {
                key: key,
            })
            .getOne();
    }
}
