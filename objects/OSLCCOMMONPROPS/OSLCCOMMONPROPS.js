mos = {
    "objectName": "OSLCCOMMONPROPS",
    "className": "com.ibm.tivoli.maximo.oslc.provider.app.OslcCommonPropertiesSet",
    "description": "OSLC Common Properties",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "OSLCCOMMONPROPSID",
    "primaryKeyColumns": [
        "OSLCPROPNAME",
        "OSLCPROPNS"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCCOMMONPROPS",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Record Language",
            "longDescription": null
        },
        {
            "objectName": "OSLCNSPREFIX",
            "targetObject": "OSLCCOMMONPROPS",
            "parentKeys": "NSURI",
            "targetKeys": "OSLCPROPNS",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Namespace",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "OSLCPROPNAME",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Name",
            "remarks": "The OSLC common property name that is mapped to a resource attribute.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "The description of the property name.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCPROPNS",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Namespace",
            "remarks": "The namespace of the OSLC property name.",
            "sameAsAttribute": "NSURI",
            "sameAsObject": "OSLCNSPREFIX"
        },
        {
            "attributeName": "OSLCPROPTYPE",
            "required": true,
            "persistent": true,
            "title": "OSLC Property Type",
            "remarks": "The option that identifies the property data type, such as a String, Integer, Date, or Boolean.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "If the check box is selected, the common property was created by a user.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCCOMMONPROPSID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
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
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description Long description",
            "remarks": "Long Description for Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "OSLCCOMMONPROPS",
            "source": "OSOSLCMAP",
            "remarks": "Relation to get all OSLC Common Proprties. This relationship returns 0 or more rows.",
            "whereClause": "oslcpropname=:oslcpropname and oslcpropns=:oslcpropns",
            "cardinality": null
        }
    ]
}