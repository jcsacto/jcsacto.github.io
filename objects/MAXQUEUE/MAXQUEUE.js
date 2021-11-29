mos = {
    "objectName": "MAXQUEUE",
    "className": "psdi.iface.app.extsystem.MaxQueueSet",
    "description": "MAXIMO MEA Queues",
    "longDescription": null,
    "isView": false,
    "isInternal": true,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "MAXQUEUEID",
    "primaryKeyColumns": [
        "QUEUENAME"
    ],
    "logicalRelationships": [
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "INCONTQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "INSEQQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXEXTSYSTEM",
            "parentKeys": "QUEUENAME",
            "targetKeys": "OUTSEQQUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXINTERROR",
            "parentKeys": "QUEUENAME",
            "targetKeys": "QUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        },
        {
            "objectName": "MAXQUEUE",
            "targetObject": "MAXINTMSGTRK",
            "parentKeys": "QUEUENAME",
            "targetKeys": "QUEUENAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "MEA Queue",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "PERSON",
            "targetObject": "MAXQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "CHANGEBY",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person who last changed the record.",
            "longDescription": null
        },
        {
            "objectName": "PERSON",
            "targetObject": "MAXQUEUE",
            "parentKeys": "PERSONID",
            "targetKeys": "USERID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Person",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "QUEUENAME",
            "required": true,
            "persistent": true,
            "title": "Queue JNDI Name",
            "remarks": "JNDI name of the JMS queue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "QCONFACTJNDINAME",
            "required": true,
            "persistent": true,
            "title": "Queue Connection Factory",
            "remarks": "Identifies the connection factory for accessing the queue. Default is jms/mro/int/queues/sqin.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INCONFACTORY",
            "required": false,
            "persistent": true,
            "title": "Initial Context Factory",
            "remarks": "Identifies the class that connects to the JMS server. This is specific to the application server.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDERURL",
            "required": false,
            "persistent": true,
            "title": "Provider URL",
            "remarks": "URL for accessing the JMS server.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSEQUENTIAL",
            "required": true,
            "persistent": true,
            "title": "Sequential ",
            "remarks": "Specifies whether the inbound queue is a continuous or sequential queue. Both types process inbound messages on a first in first out basis, but the sequential queue stops processing messages in the queue if it encounters an error, while the continuous queue processes subsequent messages in the queue after it encounters an error. If the checkbox is selected, the queue is sequential.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISINBOUND",
            "required": true,
            "persistent": true,
            "title": "Inbound",
            "remarks": "Specifies whether the corresponding queue is an inbound or an outbound queue. If the check box is selected, it is an inbound queue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EMAILADDR",
            "required": false,
            "persistent": true,
            "title": "E-mail Address",
            "remarks": "Address to which the MEA sends notification of transaction errors in the queue. This is typically the e-mail address of a system administrator If no value is specified, the MEA sends error notification to the Administrator Email Address specified in the Integration Administration Setup dialog box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERDEFINED",
            "required": true,
            "persistent": true,
            "title": "User Defined",
            "remarks": "Specifies whether the queue was predefined (MEA-supplied) or created by a user. If the check box is selected, a user created the queue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEBY",
            "required": true,
            "persistent": true,
            "title": "Changed By",
            "remarks": "CHANGEBY",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "CHANGEDATE",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXTRYCOUNT",
            "required": true,
            "persistent": true,
            "title": "Maximum Try Count",
            "remarks": "Number of times the MEA tries to process a message before writing the message to the error log and sending an email notification to the system administrator. Value cannot be less than 0.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXQUEUEID",
            "required": true,
            "persistent": true,
            "title": "MAXQUEUEID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USERID",
            "required": false,
            "persistent": true,
            "title": "User ID",
            "remarks": "User ID for accessing the corresponding JMS queue.",
            "sameAsAttribute": "PERSONID",
            "sameAsObject": "PERSON"
        },
        {
            "attributeName": "PASSWORD",
            "required": false,
            "persistent": true,
            "title": "Password",
            "remarks": "Password for accessing a password-protected queue.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISCOMPRESS",
            "required": true,
            "persistent": true,
            "title": "Compress",
            "remarks": "add column to indicate compression requirements",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SELECTOR",
            "required": false,
            "persistent": false,
            "title": "Selector",
            "remarks": "You can enter a qualifying clause to filter the the data that is returned. When you specify a filter, a window shows a list of the messages that meet the filter criteria. You can select individual messages to view the XML message content.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MAXCOUNT",
            "required": false,
            "persistent": false,
            "title": "Count",
            "remarks": "You can limit the number of rows to view from the queue by specifying a  value in this field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "COUNTONLY",
            "required": true,
            "persistent": false,
            "title": "Count Only",
            "remarks": "Select this option to see the number of records in the queue, without information about individual records.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETECOUNT",
            "required": false,
            "persistent": false,
            "title": "Count",
            "remarks": "Count",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISTEXT",
            "required": true,
            "persistent": true,
            "title": "Text",
            "remarks": "Is Text Message",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDERUSER",
            "required": false,
            "persistent": true,
            "title": "Provider User",
            "remarks": "Provider user used for creating jms connection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PROVIDERPASSWORD",
            "required": false,
            "persistent": true,
            "title": "Provider Password",
            "remarks": "Provider password used for creating jms connection",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TENANTCODE",
            "required": false,
            "persistent": true,
            "title": "Tenant",
            "remarks": "The unique identifier for the tenant. All users that belong to this tenant enter this code as part of their login credentials. The identifier is used as the USERID value and the PERSONID value for this tenant.If you enter a long identifier when you create a tenant, the identifier is shortened. You can modify the value, but after you save it, the identifier is  read only.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXINTVIEWQUEUE",
            "target": "MAXINTVIEWQUEUE",
            "remarks": "Relation to MaxIntViewQueue object to show all viewd files.",
            "whereClause": null,
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "MAXQUEUEINCONT",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Inbound Continuous Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.incontqueuename and maxqueue.isinbound = :yes and maxqueue.issequential = :no) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:incontqueuename and isinbound = :yes and issequential = :no",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXQUEUEINSEQ",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Inbound Sequential Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.inseqqueuename and maxqueue.isinbound = :yes and maxqueue.issequential = :yes) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:inseqqueuename and isinbound = :yes and issequential = :yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "MAXQUEUEOUT",
            "source": "MAXEXTSYSTEM",
            "remarks": "Relationship to the MAXQUEUE table, used to find the Outbound Queue record for a given Queue Name (maxqueue.queuename = maxextsystem.outseqqueuename and maxqueue.isinbound = :no) The resulting set will contain zero or one object.",
            "whereClause": "queuename=:outseqqueuename and isinbound = :no",
            "cardinality": "UNDEFINED"
        }
    ]
}