import { TestBed, inject } from "@angular/core/testing";

import { JWTService } from "./jwt.service";

describe("JWTService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JWTService]
    });
  });

  it("should be created", inject([JWTService], (service: JWTService) => {
    expect(service).toBeTruthy();
  }));
});
