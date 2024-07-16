export const security_master = {
    "type": "array",
    "properties": {
        "CompanyCode": {"type": "number"},
        "SecurityTypeCode": {"type": "number"},
        "SecuritySubTypeCode": {"type": "number"},
        "SerialNumber": {"type": "number"},
        "SecurityCode": {"type": "string"},
        "TickerName": {"type": "string"},
        "IssuePrice": {"type": "number"},
        "Description": {"type": "string"},
        "DateOfIssue": {"type": "string", "format": "date-time"},
        "DateOfExpiry": {"type": ["null", "string"]},
        "FaceValue": {"type": "number"},
        "MarketLot": {"type": "number"},
        "ISINCode": {"type": "string"},
        "Remarks": {"type": "string"},
        "CreatedOn": {"type": "string"},
        "CreatedBy": {"type": "string"},
        "LastModifiedOn": {"type": "string"},
        "LastModifiedBy": {"type": "string"},
        "ReasonForModification": {"type": "string"},
        "DeleteFlag": {"type": "boolean"},
        "Code": {"type": "string"},
        "IsItActiveSecurity": {"type": "boolean"},
        "BroadIndustryCode": {"type": "number"},
        "BroadIndustryName": {"type": "string"},
        "ShortCompanyName": {"type": "string"},
        "nsecode": {"type": ["null", "string"]}
    }
}