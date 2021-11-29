mos = {
    "objectName": "ASSETUSERCUSDFLT",
    "className": "psdi.app.asset.virtual.AssetUserCusDfltSet",
    "description": "Table to store default values for user custodian",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "DFLTPERSON",
            "required": false,
            "persistent": false,
            "title": "Person",
            "remarks": "Default person",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "DFLTISUSER",
            "required": true,
            "persistent": false,
            "title": "User",
            "remarks": "default isuser",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTISCUSTODIAN",
            "required": true,
            "persistent": false,
            "title": "Custodian",
            "remarks": "default iscustodian",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CANDELETE",
            "required": true,
            "persistent": false,
            "title": "Delete",
            "remarks": "can delete person from assetusercust table",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DFLTISPRIMARY",
            "required": true,
            "persistent": false,
            "title": "Primary",
            "remarks": "Default IsPrimary",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DFLTPERSON",
            "target": "PERSON",
            "remarks": "Relationship to the person records, used to find the person record.",
            "whereClause": "personid=:dfltperson",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": []
}