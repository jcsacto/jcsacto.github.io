mos = {
    "objectName": "OSLCLINK",
    "className": "com.ibm.tivoli.maximo.oslc.consumer.app.oslclink.OslcLinkSet",
    "description": "OSLC Links",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "OSLCLINKID",
    "primaryKeyColumns": [
        "OSLCLINKID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "OSLCLINK",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "OSLCLINK",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROVIDERNAME",
            "required": false,
            "persistent": false,
            "title": "Provider",
            "remarks": "Identifies the OSLC provider application.",
            "sameAsAttribute": "PROVIDERNAME",
            "sameAsObject": "OSLCPROVIDER"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Object Name",
            "remarks": "Object Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OBJECTUID",
            "required": true,
            "persistent": true,
            "title": "Object UID",
            "remarks": "Unique ID of the Object",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SPTITLE",
            "required": false,
            "persistent": true,
            "title": "Service Provider Details",
            "remarks": "Service Provider Details",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "Linked Resource URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LINKTYPE",
            "required": true,
            "persistent": true,
            "title": "Link Type",
            "remarks": "The base URI that groups links for different interactions on the same resource and usage combination. The combination might be for one or more OSLC providers.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": false,
            "persistent": true,
            "title": "Change By",
            "remarks": "Change By",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": false,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "OSLCLINKID",
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
            "attributeName": "SPTITLE_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Service Provider Details Long description",
            "remarks": "Long Description for Service Provider Details",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Linked Resource URL Long description",
            "remarks": "Long Description for Linked Resource URL",
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
        },
        {
            "attributeName": "UPDATEPROPNAME",
            "required": false,
            "persistent": true,
            "title": "Association Property",
            "remarks": "Association Property Name",
            "sameAsAttribute": "UPDATEPROPNAME",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "UPDATEPROPNS",
            "required": false,
            "persistent": true,
            "title": "Association Property Namespace",
            "remarks": "Association Property Namespace",
            "sameAsAttribute": "UPDATEPROPNS",
            "sameAsObject": "OSLCINTERACTION"
        },
        {
            "attributeName": "CONSUMER",
            "required": true,
            "persistent": true,
            "title": "Created via consumer",
            "remarks": "Is Created By Consumer",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": []
}