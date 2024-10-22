import { LinksService } from './links.service'
import { Test, TestingModule } from '@nestjs/testing'

describe('LinksService', () => {
  let service: LinksService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LinksService],
    }).compile()

    service = module.get<LinksService>(LinksService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
