mos = {
    "objectName": "FAILURECODE",
    "className": "psdi.app.failure.FailureCodeSet",
    "description": "The FAILURECODE Table",
    "longDescription": "This MboSet provides descriptions for failure codes. These failure codes can be used in failure hierarchies. ",
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "FAILURECODEID",
    "primaryKeyColumns": [
        "ORGID",
        "FAILURECODE"
    ],
    "logicalRelationships": [
        {
            "objectName": "FAILURECODE",
            "targetObject": "ASSET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 1",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "FAILURELIST",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Location of failure code in a failure list hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "FAILUREREPORT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Code description.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 8",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 9",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 10",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 11",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 16",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 17",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 18",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "INCIDENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 19",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "LOCOPER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 20",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 25",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 26",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 27",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 28",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 33",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 34",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 35",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "PROBLEM",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 36",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SOLUTION",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 45",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 46",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 47",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 48",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 53",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 54",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 55",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "SR",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 56",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ASSETORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 61",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 62",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 63",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 64",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR1CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "2nd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FR2CODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "3rd level of the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 69",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR1CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 70",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, FR2CODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 71",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "TICKET",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORIGRECORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 72",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Code",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WMASSIGNMENT",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Problem Code",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 75",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 76",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOACTIVITY",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 79",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 80",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WOCHANGE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 83",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 84",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORELEASE",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, FAILURECODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 87",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "CALCORGID, PROBLEMCODE",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 88",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, FAILURECODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Failure Hierarchy.",
            "longDescription": null
        },
        {
            "objectName": "FAILURECODE",
            "targetObject": "WORKORDER",
            "parentKeys": "ORGID, FAILURECODE",
            "targetKeys": "ORGID, PROBLEMCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "1st levelof the failure hierarchy",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "FAILURECODE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "FAILURECODE",
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
            "attributeName": "FAILURECODE",
            "required": true,
            "persistent": true,
            "title": "Failure Code",
            "remarks": "Failure Code",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Failure Code Description",
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Details",
            "remarks": "Long Description for Failure Code Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FAILURECODEID",
            "required": true,
            "persistent": true,
            "title": "FAILURECODEID",
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
        }
    ],
    "outgoingRelationships": [
        {
            "name": "DOCLINKS",
            "target": "DOCLINKS",
            "remarks": "Relationship to the doclinks table, used to find all  documents for a given failurecode. (failurecode.failurecode = doclinks.keyvalue and doclinks.keycolumn='FAILURECODE' and doclinks.keytable='FAILURECODE'). This relationship will find zero or more objects.",
            "whereClause": "ownertable = 'FAILURECODE' and ownerid = :failurecodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURELIST",
            "target": "FAILURELIST",
            "remarks": "Relationship to the FailureList table, used to find all failurelists for a given failurecode. (failurelist.failurecode = failurecode.failurecode). This relationship will find zero or more objects.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "FAILURECODE",
            "source": "FAILURELIST",
            "remarks": "Relationship to the Failurecode table, used to find failurecode for a given failurelist. (failurelist.failurecode=failurecode.failurecode). The resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURECODE",
            "source": "FAILUREREPORT",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for a given failurereport. (FailureCode.failurecode = FailureReport.Failurecode). This resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURE",
            "source": "TICKET",
            "remarks": "Relationship to the failurecode table, used to find the failurecode  for the failurecode of the ticket. This resulting set will contain one object.",
            "whereClause": "failurecode=:failurecode and orgid=:assetorgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FAILURE",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for a work order. (FailureCode.failurecode = Workorder.failurecode). This resulting set will contain zero or one object. If the workorder's FailureCode attribute isn't null, this set will have one member.",
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FR1CODE",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode. (FailureCode.failurecode = Workorder.fr1code). This resulting set will contain zero or one object. If the workorder's fr1code attribute isn't null, this set will have one member. Fr1code is a non_persistent attribute, see attributes of workorder table.",
            "whereClause": "failurecode=:fr1code and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "FR2CODE",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode. (FailureCode.failurecode = Workorder.fr2code). This resulting set will contain zero or one object. If the workorder's fr2code attribute isn't null, this set will have one member. Fr1code is a non_persistent attribute, see attributes of workorder table.",
            "whereClause": "failurecode=:fr2code and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROBLEM",
            "source": "WORKORDER",
            "remarks": "Relationship to the FailureCode table, used to find the failurecode for the work order's problemcode attribute. (FailureCode.failurecode = Workorder.problemcode). This resulting set will contain zero or one object. If the workorder's ProblemCode attribute isn't null, this set will have one member.",
            "whereClause": "failurecode=:problemcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_FAILURE",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "failurecode=:failurecode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "WO_PROBLEM",
            "source": "WORKORDER",
            "remarks": null,
            "whereClause": "failurecode=:problemcode and orgid=:orgid",
            "cardinality": "UNDEFINED"
        }
    ]
}