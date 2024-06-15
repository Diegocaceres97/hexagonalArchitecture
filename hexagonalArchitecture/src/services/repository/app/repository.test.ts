import { describe, expect, it } from "vitest";
import { LoggerStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";

describe('Repository', () => {
    const monitorStub = new LoggerStubAdapter();
    const userRepositoryMock = new Repository(monitorStub);

    it.concurrent('should get user', async () => {
        //GIVEN
      const mockedEmail = 'test@test.com';
      const expectedResult = {
          id: '123456789',
          email: 'test@test.com',
          name: 'test'
      }

        //WHEN
        const result = await userRepositoryMock.getUser(expectedResult.email);

        //THEN
        expect(result).not.toEqual(expectedResult);
    });


});