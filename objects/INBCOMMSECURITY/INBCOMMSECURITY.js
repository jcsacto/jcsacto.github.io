mos = {
    "objectName": "INBCOMMSECURITY",
    "className": "psdi.common.emailstner.InbCommSecuritySet",
    "description": "Email Listener security table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "INBCOMMSECURITYID",
    "primaryKeyColumns": [
        "EMAILADDRESS",
        "MAILSERVER",
        "APP",
        "OBJECTNAME"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "INBOUNDCOMMCFG",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "EMAILADDRESS, MAILSERVER",
            "targetKeys": "EMAILADDRESS, MAILSERVER",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Inbound Communication Configuration",
            "longDescription": null
        },
        {
            "objectName": "MAXAPPS",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "APP",
            "targetKeys": "APP",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Application",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "INBCOMMSECURITY",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "OBJECTNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MBO",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "INBCOMMSECURITYID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDRESS",
            "required": true,
            "persistent": true,
            "title": "E-mail Address",
            "remarks": "Email Address that constitutes the particular listener configuration security is being set up for",
            "sameAsAttribute": "EMAILADDRESS",
            "sameAsObject": "INBOUNDCOMMCFG"
        },
        {
            "attributeName": "MAILSERVER",
            "required": true,
            "persistent": true,
            "title": "Mail Server",
            "remarks": "Mail server associated with the configuration",
            "sameAsAttribute": "MAILSERVER",
            "sameAsObject": "INBOUNDCOMMCFG"
        },
        {
            "attributeName": "OBJECTNAME",
            "required": true,
            "persistent": true,
            "title": "Maximo business object",
            "remarks": "Business object supported by this listener configuration",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "APP",
            "required": true,
            "persistent": true,
            "title": "Maximo Application",
            "remarks": "Application that should be used to determine security authorization when processing an incoming email message for this particular listener configuration",
            "sameAsAttribute": "APP",
            "sameAsObject": "MAXAPPS"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "INBMAXAPP",
            "target": "MAXAPPS",
            "remarks": "Maximo App for InboundCommsecurity maximo object",
            "whereClause": "maintbname=:objectname and app=:app",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBMAXOBJ",
            "target": "MAXOBJECT",
            "remarks": "Maximo Business Object for INBCOMMSECURITY",
            "whereClause": "objectname=:objectname",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "INBCOMMSEC",
            "source": "INBOUNDCOMM",
            "remarks": "all security records for objectname in staging table",
            "whereClause": "emailaddress= :emailaddress and mailserver =:mailserver",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "INBSECURITY",
            "source": "INBOUNDCOMMCFG",
            "remarks": "all security records for listener configuration",
            "whereClause": "emailaddress= :emailaddress and mailserver =:mailserver",
            "cardinality": "UNDEFINED"
        }
    ]
}