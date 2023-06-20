import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';

import { CustumerController } from '@controllers/custumer/custumer.controller';
import { CustumerService } from '@application/services/custumer.service';
import { CustumersRepositoryImplements } from '@data/implements/custumers-repository.implements';
import { CustumerRedisRepository } from '@data/repository/custumer-redis.repository';
import { RedisRepository } from '@data/repository/redis.repository';
import { Client, ClientDomain } from '@domain/entitys/client.entity';
import { CustumerMapper } from '@data/mappers/custumer.mapper';
import { IClientResponse } from '@application/dto/client.response';

describe('Custumer Controller (unit)', () => {
  let controller: CustumerController;
  let service: CustumerService;

  const mockClientService = {
    saveCustumer: jest.fn((dto) => {
      return {
        id: '123456',
        ...dto,
      };
    }),

    updateCustumer: jest.fn().mockImplementation((id: string, dto: Client) => ({
      id,
      ...dto,
    })),
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CustumerController],
      providers: [
        CustumerService,
        {
          provide: CustumersRepositoryImplements,
          useClass: CustumerRedisRepository,
        },
        RedisRepository,
      ],
    })
      .overrideProvider(CustumerService)
      .useValue(mockClientService)
      .compile();

    controller = moduleRef.get<CustumerController>(CustumerController);
    service = moduleRef.get<CustumerService>(CustumerService);
  });

  describe('custumer', () => {
    it('should return the client entity', async () => {
      const client = new ClientDomain({
        id: '1234567',
        document: 123456,
        name: 'John Doe',
      });
      const expectedResponse = {
        id: '1234567',
        document: 123456,
        name: 'John Doe',
      };

      expect(client).toEqual(expectedResponse);
    });
  });

  it('should be defined controller', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined service', () => {
    expect(service).toBeDefined();
  });

  it('should create client', () => {
    expect(
      controller.saveClient({
        id: '123456',
        document: 123456,
        name: 'Jonh Doe',
      }),
    ).toEqual({
      id: '123456',
      document: expect.any(Number),
      name: 'Jonh Doe',
    });

    expect(mockClientService.saveCustumer).toHaveBeenCalled();
  });

  it('should update a client', () => {
    expect(
      controller.saveClient({
        id: '123456',
        document: 123456,
        name: 'Jonh Doe',
      }),
    ).toEqual({
      id: '123456',
      document: expect.any(Number),
      name: 'Jonh Doe',
    });

    const dto = {
      id: '1',
      document: 1,
      name: 'Jonh Doe',
    };

    expect(controller.updateClient('1', dto)).toEqual({
      id: '1',
      ...dto,
    });
  });
});
