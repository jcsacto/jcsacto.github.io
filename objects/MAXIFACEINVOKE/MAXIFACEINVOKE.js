mos = {
    "objectName": "MAXIFACEINVOKE",
    "className": "psdi.iface.app.invoke.MaxIfaceInvokeSet",
    "description": "Invocation Channel",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXIFACEINVOKEID",
    "primaryKeyColumns": [
        "IFACENAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "LANGUAGE",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "MAXLANGCODE",
            "targetKeys": "LANGCODE",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Language for the record",
            "longDescription": null
        },
        {
            "objectName": "MAXENDPOINT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "ENDPOINTNAME",
            "targetKeys": "ENDPOINTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Invocation Channel",
            "longDescription": null
        },
        {
            "objectName": "MAXIFACEIN",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "IFACENAME",
            "targetKeys": "IFACENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Enterprise Services Interface",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "INTOBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Request Object Structure",
            "longDescription": null
        },
        {
            "objectName": "MAXINTOBJECT",
            "targetObject": "MAXIFACEINVOKE",
            "parentKeys": "INTOBJECTNAME",
            "targetKeys": "REPLYINTOBJNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Response Object Structure",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXIFACEINVOKE",
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
            "attributeName": "MAXIFACEINVOKEID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACENAME",
            "required": true,
            "persistent": true,
            "title": "Invocation Channel",
            "remarks": "Invocation Channel Name",
            "sameAsAttribute": "IFACENAME",
            "sameAsObject": "MAXIFACEIN"
        },
        {
            "attributeName": "IFACETYPE",
            "required": true,
            "persistent": true,
            "title": "Adapter",
            "remarks": "Invocation Channel Adapter Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INTOBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Request Object Structure",
            "remarks": "Request Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "IFACEEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Request Processing Class",
            "remarks": "Request Processing Class Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Request User Exit",
            "remarks": "Request User Exit Class Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "IFACEMAPNAME",
            "required": false,
            "persistent": true,
            "title": "Request XSL File",
            "remarks": "Request XSL File Location",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYEXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Response Processing Class",
            "remarks": "The processing class for response",
            "sameAsAttribute": "IFACEEXITCLASS",
            "sameAsObject": "MAXIFACEINVOKE"
        },
        {
            "attributeName": "REPLYUSEREXITCLASS",
            "required": false,
            "persistent": true,
            "title": "Response User Exit Class",
            "remarks": "The user exit class for processing response",
            "sameAsAttribute": "IFACEUSEREXITCLASS",
            "sameAsObject": "MAXIFACEINVOKE"
        },
        {
            "attributeName": "REPLYMAPNAME",
            "required": false,
            "persistent": true,
            "title": "Response XSL File",
            "remarks": "Response XSL File Location",
            "sameAsAttribute": "IFACEMAPNAME",
            "sameAsObject": "MAXIFACEINVOKE"
        },
        {
            "attributeName": "MESSAGETYPE",
            "required": true,
            "persistent": true,
            "title": "Operation",
            "remarks": "Operation Name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "Changed By User",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Change Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "User Defined",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REPLYINTOBJNAME",
            "required": false,
            "persistent": true,
            "title": "Response Object Structure",
            "remarks": "Response Object Structure Name",
            "sameAsAttribute": "INTOBJECTNAME",
            "sameAsObject": "MAXINTOBJECT"
        },
        {
            "attributeName": "ENDPOINTNAME",
            "required": false,
            "persistent": true,
            "title": "Endpoint",
            "remarks": "Endpoint Name",
            "sameAsAttribute": "ENDPOINTNAME",
            "sameAsObject": "MAXENDPOINT"
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
            "attributeName": "LANGCODE",
            "required": true,
            "persistent": true,
            "title": "Language Code",
            "remarks": "Language Code",
            "sameAsAttribute": "MAXLANGCODE",
            "sameAsObject": "LANGUAGE"
        },
        {
            "attributeName": "DESCRIPTION_LONGDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "DESCRIPTION Long description",
            "remarks": "Long description for DESCRIPTION",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROCESSRESPONSE",
            "required": true,
            "persistent": true,
            "title": "Process Response",
            "remarks": "Process Response",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "REQXMLDATA",
            "required": false,
            "persistent": false,
            "title": "Sample Request XML",
            "remarks": "Sample Request XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "HASLD",
            "required": true,
            "persistent": true,
            "title": "Has Long Description",
            "remarks": "Has Long Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RESPXMLDATA",
            "required": false,
            "persistent": false,
            "title": "Sample Response XML",
            "remarks": "Sample Response XML",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "BIDICONFIG",
            "required": false,
            "persistent": true,
            "title": "BIDI Configuration",
            "remarks": "BIDI Configuration",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "BIDICONFIG",
            "target": "ALNDOMAIN",
            "remarks": "Bidi Configration for Invokation Channel",
            "whereClause": "domainid='BIDICONFIG' and value=:bidiconfig",
            "cardinality": null
        },
        {
            "name": "DMMAXIFINVOKELD",
            "target": "LONGDESCRIPTION",
            "remarks": "long description record for maxifaceinvoke",
            "whereClause": "ldkey=:maxifaceinvokeid and ldownertable = 'MAXIFACEINVOKE'",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXENDPOINT",
            "target": "MAXENDPOINT",
            "remarks": "get the endpoint",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECT",
            "target": "MAXINTOBJECT",
            "remarks": "get the maxintobject for request object structure",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXINTOBJECTRESP",
            "target": "MAXINTOBJECT",
            "remarks": "get the maxintobject for response object structure",
            "whereClause": "intobjectname=:replyintobjname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXIFACEINVOKE",
            "source": "AUTOSCRIPT",
            "remarks": "Relationship to the MaxIfaceInvoke table, Invocation Channel table, used to find invocation channel records for a given ifacename . The resulting set will contain one row.",
            "whereClause": "ifacename=:ifacenameic",
            "cardinality": null
        },
        {
            "name": "MAXIFACEINVOKE",
            "source": "MAXENDPOINT",
            "remarks": "Relationship to all Invocations Channel table. The resulting set will contain one or more row.",
            "whereClause": "endpointname=:endpointname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINVOKE",
            "source": "MAXIM",
            "remarks": "Relationship to the MAXIFACEINVOKE table, used to find the Invocation Channel for an IM.",
            "whereClause": "ifacename=:maxchannelname",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXIFACEINVOKE",
            "source": "MAXINTERACTION",
            "remarks": "Get Invocation Channel iformation.It will return 1 row",
            "whereClause": "ifacename=:channelname",
            "cardinality": null
        },
        {
            "name": "MAXIFACEINVOKE",
            "source": "MAXINTOBJECT",
            "remarks": "Relationship to the MAXIFACEINVOKE table, used to find all invoke channels for a given MAXINTOBJECT. (MAXINTOBJECT.intobjectname=MAXIFACEINVOKE.intobjectname) The resulting set will contain zero or more objects.",
            "whereClause": "intobjectname=:intobjectname",
            "cardinality": "UNDEFINED"
        }
    ]
}