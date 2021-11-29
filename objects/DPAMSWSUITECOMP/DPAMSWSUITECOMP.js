mos = {
    "objectName": "DPAMSWSUITECOMP",
    "className": "psdi.app.dpamsws.DPAMSWSuiteCompSet",
    "description": "Deployed Assets Software Suite Setup Components",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPAMSWSUITECOMPID",
    "primaryKeyColumns": [
        "DPAMSWSUITECOMPID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPAMSWSUITECOMP",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SOFTWARENAME",
            "required": true,
            "persistent": true,
            "title": "Software",
            "remarks": "Name of a software application that is a component of the software suite.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDVERSIONLOW",
            "required": true,
            "persistent": true,
            "title": "Required Version Low",
            "remarks": "Specifies the lowest version number acceptable for the application. Only versions equal to or greater than the specified value are components of the suite. The value in this field must be less than the value in the Required Version High field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIREDVERSIONHI",
            "required": true,
            "persistent": true,
            "title": "Required Version High",
            "remarks": "Specifies the highest version number acceptable for the application. Only versions equal to or less than the specified value are components of the suite. The value in this field must be greater than the value in the Required Version Low field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPAMSWSUITECOMPID",
            "required": true,
            "persistent": true,
            "title": "Software Suite Component Id",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQUIRED",
            "required": true,
            "persistent": true,
            "title": "Required",
            "remarks": "Specifies whether the software application is a required component of the software suite. If the check box is selected, the application is a mandatory component. The software suite will be identified as a suite only if all required components are found; if any required component is missing, the suite will not be identified. If the check box is cleared (the default), the application is a component of the suite, but it is not mandatory.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SUITEID",
            "required": false,
            "persistent": true,
            "title": "Suite Id",
            "remarks": "Suite Id",
            "sameAsAttribute": "SUITEID",
            "sameAsObject": "DPAMSWSUITE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DPAMSOFTWARE_DPAMSWSUITECOMP",
            "source": "DPAMSOFTWARE",
            "remarks": "Relationship to find the Software Suite Components for this software target name",
            "whereClause": "softwarename=:softwarename",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMSWSUITECOMP",
            "source": "DPAMSWSUITE",
            "remarks": null,
            "whereClause": "suiteid = :suiteid",
            "cardinality": "UNDEFINED"
        }
    ]
}