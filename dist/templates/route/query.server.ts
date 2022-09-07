import { gql } from "@apollo/client";

export const query = gql`
    query Country($code: ID!) {
        country(code: $code) {
            code
            name
            native
            phone
            continent {
                code
                name
            }
            capital
            currency
            languages {
                code
                name
                native
                rtl
            }
            states {
                code
                name
            }
        }
    }
`