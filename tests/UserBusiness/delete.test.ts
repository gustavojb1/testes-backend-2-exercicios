import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("delete", () =>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deleta usuário", async () =>{
        const input: DeleteInputDTO = {token: "token-mock-admin", id:"id-mock"}

        const response = await userBusiness.deleteUser(input)

        expect(response.message).toBe("Usuario deletado com sucesso")
    })

})