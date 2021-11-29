mos = {
    "objectName": "CHARTOFACCOUNTS",
    "className": "psdi.app.financial.AccountSet",
    "description": "The Chart of Accounts Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "CHARTOFACCOUNTSID",
    "primaryKeyColumns": [
        "ORGID",
        "GLACCOUNT"
    ],
    "logicalRelationships": [
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHED",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLCREDITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Credit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHED",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLDEBITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Debit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLCREDITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Credit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPSCHEDHISTORY",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLDEBITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Debit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLCREDITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Credit Account",
            "longDescription": null
        },
        {
            "objectName": "CHARTOFACCOUNTS",
            "targetObject": "DEPTRANS",
            "parentKeys": "ORGID, GLACCOUNT",
            "targetKeys": "ORGID, GLDEBITACCT",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Debit Account",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "CHARTOFACCOUNTS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "CHARTOFACCOUNTS",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "GLACCOUNT",
            "required": true,
            "persistent": true,
            "title": "GL Account",
            "remarks": "General ledger account code. This field is read-only after the account is created (the account code may have been downloaded from your accounting system). To create a new account code in an empty field, click the Select Value button and choose the component values from the Select GL Account dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP01",
            "required": false,
            "persistent": true,
            "title": "Glcomp01",
            "remarks": "GL Account component 01.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP02",
            "required": false,
            "persistent": true,
            "title": "Glcomp02",
            "remarks": "GL Account component 02.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP03",
            "required": false,
            "persistent": true,
            "title": "Glcomp03",
            "remarks": "GL Account component 03.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP04",
            "required": false,
            "persistent": true,
            "title": "Glcomp04",
            "remarks": "GL Account component 04.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP05",
            "required": false,
            "persistent": true,
            "title": "Glcomp05",
            "remarks": "GL Account component 05.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP06",
            "required": false,
            "persistent": true,
            "title": "Glcomp06",
            "remarks": "GL Account component 06.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP07",
            "required": false,
            "persistent": true,
            "title": "Glcomp07",
            "remarks": "GL Account component 07.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP08",
            "required": false,
            "persistent": true,
            "title": "Glcomp08",
            "remarks": "GL Account component 08.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP09",
            "required": false,
            "persistent": true,
            "title": "Glcomp09",
            "remarks": "GL Account component 09.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP10",
            "required": false,
            "persistent": true,
            "title": "Glcomp10",
            "remarks": "GL Account component 10.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP11",
            "required": false,
            "persistent": true,
            "title": "Glcomp11",
            "remarks": "GL Account component 11.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP12",
            "required": false,
            "persistent": true,
            "title": "Glcomp12",
            "remarks": "GL Account component 12.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP13",
            "required": false,
            "persistent": true,
            "title": "Glcomp13",
            "remarks": "GL Account component 13.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP14",
            "required": false,
            "persistent": true,
            "title": "Glcomp14",
            "remarks": "GL Account component 14.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP15",
            "required": false,
            "persistent": true,
            "title": "Glcomp15",
            "remarks": "GL Account component 15.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP16",
            "required": false,
            "persistent": true,
            "title": "Glcomp16",
            "remarks": "GL Account component 16.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP17",
            "required": false,
            "persistent": true,
            "title": "Glcomp17",
            "remarks": "GL Account component 17.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP18",
            "required": false,
            "persistent": true,
            "title": "Glcomp18",
            "remarks": "GL Account component 18.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP19",
            "required": false,
            "persistent": true,
            "title": "Glcomp19",
            "remarks": "GL Account component 19.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLCOMP20",
            "required": false,
            "persistent": true,
            "title": "Glcomp20",
            "remarks": "GL Account component 20.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCOUNTNAME",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the GL Account, for example, what it is used for and what sites it applies to. To enter or view additional information, click the Long Description button.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "GLACCTYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "User-defined code to signify the kind of account. For example, your firm may use account type codes to represent expense accounts, capital accounts, shrinkage accounts, and so forth. By default, the field length is 3.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SOURCESYSID",
            "required": false,
            "persistent": true,
            "title": "Source System ID",
            "remarks": "Source System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "OWNERSYSID",
            "required": false,
            "persistent": true,
            "title": "Owner System ID",
            "remarks": "Owner System ID",
            "sameAsAttribute": "OWNER1SYSID",
            "sameAsObject": "MXCOLLAB"
        },
        {
            "attributeName": "EXTERNALREFID",
            "required": false,
            "persistent": true,
            "title": "External Reference ID",
            "remarks": "External Reference ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SENDERSYSID",
            "required": false,
            "persistent": true,
            "title": "Sender System ID",
            "remarks": "Column used by ERP-Integration (APIs)",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization Identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "ACTIVE",
            "required": true,
            "persistent": true,
            "title": "Active",
            "remarks": "Specifies whether the account is active. If the check box is selected (the default), the account can be used on MAXIMO records. If the check box is cleared, the account cannot be used on new MAXIMO records, but no change is made to existing records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACCOUNTNAME_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Account Name Long Description",
            "remarks": "Long Description for Description of GL Account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHARTOFACCOUNTSID",
            "required": true,
            "persistent": true,
            "title": "CHARTOFACCOUNTSID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Column",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Boolean flag to indicate if there is any long description for this record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ACTIVEDATE",
            "required": true,
            "persistent": true,
            "title": "Active Date",
            "remarks": "The date the general ledger account was activated.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXPIREDATE",
            "required": false,
            "persistent": true,
            "title": "Expiration Date",
            "remarks": "The date the general ledger account expired or the date the general ledger account is set to expire.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OLDEXPIREDATE",
            "required": false,
            "persistent": true,
            "title": "Old Expiration Date",
            "remarks": "Old expiration date of the account.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "ASSETGLACCOUNT",
            "target": "ASSET",
            "remarks": "Relationship to the asset table, used to find the asset records where this gl account is being used (asset.orgid = chartofaccounts.orgid and asset.glaccount = chartofaccounts.glaccount). The resulting set will contain zero or more objects.",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PMGLACCOUNT",
            "target": "PM",
            "remarks": "Relationship to the PM table, used to find the PM records where this gl account is being used (pm.orgid = chartofaccounts.orgid and pm.glaccount = chartofaccounts.glaccount). The resulting set will contain zero or more objects.",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "USERPURGL",
            "target": "USERPURGL",
            "remarks": "User GL defaults for a specified GL account",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CHARTOFACCOUNTS",
            "source": "ORGANIZATION",
            "remarks": "Relationship to the ChartOfAccounts table, used to find all chart of accounts records for a given organization. (organization.orgid = chartofaccounts.orgid). The resulting set will contain one or more objects.",
            "whereClause": "orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CHARTOFACCOUNTS",
            "source": "USERPURGL",
            "remarks": "The GL account related to this user GL default",
            "whereClause": "orgid = :orgid and glaccount = :glaccount",
            "cardinality": "UNDEFINED"
        }
    ]
}