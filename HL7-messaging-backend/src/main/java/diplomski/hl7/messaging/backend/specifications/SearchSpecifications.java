package diplomski.hl7.messaging.backend.specifications;

import diplomski.hl7.messaging.backend.message.domain.Message;
import diplomski.hl7.messaging.backend.user.domain.User;
import jakarta.persistence.criteria.*;
import org.springframework.data.jpa.domain.Specification;

public class SearchSpecifications {

    public static Specification<User> searchByEmail(String email) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get("email")), "%" + email.toLowerCase() + "%");
    }

    public static Specification<Message> searchByMessage(String message) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get("message")), "%" + message.toLowerCase() + "%");
    }

    public static Specification<Message> searchByEmailMessage(String email) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> messageUserJoin = root.join("sender", JoinType.LEFT);
            return criteriaBuilder.like(criteriaBuilder.lower(messageUserJoin.get("email")), "%" + email.toLowerCase() + "%");
        };
    }

    public static Specification<Message> searchByType(String type) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(criteriaBuilder.lower(root.get("type")), "%" + type.toLowerCase() + "%");
    }

    public static Specification<Message> getAllMessages(String userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> receiverJoin = root.join("receiver", JoinType.INNER);
            return criteriaBuilder.and(
                    criteriaBuilder.equal(receiverJoin.get("id"), userId),
                    getNotBlockedOrDeletedSpecification(criteriaBuilder, root)
            );
        };
    }

    public static Specification<Message> getAllFavouriteMessages(String userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> receiverJoin = root.join("receiver", JoinType.INNER);
            return criteriaBuilder.and(
                    criteriaBuilder.equal(receiverJoin.get("id"), userId),
                    getFavourite(criteriaBuilder, root)
            );
        };
    }

    public static Specification<Message> getAllDeletedMessages(String userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> receiverJoin = root.join("receiver", JoinType.INNER);
            return criteriaBuilder.and(
                    criteriaBuilder.equal(receiverJoin.get("id"), userId),
                    getDeleted(criteriaBuilder, root)
            );
        };
    }

    public static Specification<Message> getAllSpamMessages(String userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> receiverJoin = root.join("receiver", JoinType.INNER);
            return criteriaBuilder.and(
                    criteriaBuilder.equal(receiverJoin.get("id"), userId),
                    getSpam(criteriaBuilder, root)
            );
        };
    }

    public static Specification<Message> getAllSentMessages(String userId) {
        return (root, query, criteriaBuilder) -> {
            Join<Message, User> userMessageJoin = root.join("sender", JoinType.INNER);
            return criteriaBuilder.and(
                    criteriaBuilder.equal(userMessageJoin.get("id"), userId),
                    getNotBlockedOrDeletedSpecification(criteriaBuilder, root)
            );
        };
    }

    private static Predicate getNotBlockedOrDeletedSpecification(CriteriaBuilder criteriaBuilder, Root<Message> root) {
        return criteriaBuilder.or(
                criteriaBuilder.isNull(root.get("status")),
                criteriaBuilder.equal(root.get("status"), "NEW"),
                criteriaBuilder.equal(root.get("status"), "STAR")
        );
    }

    private static Predicate getFavourite(CriteriaBuilder criteriaBuilder, Root<Message> root) {
        return criteriaBuilder.or(
                criteriaBuilder.isNull(root.get("status")),
                criteriaBuilder.equal(root.get("status"), "STAR")
        );
    }

    private static Predicate getSpam(CriteriaBuilder criteriaBuilder, Root<Message> root) {
        return criteriaBuilder.or(
                criteriaBuilder.isNull(root.get("status")),
                criteriaBuilder.equal(root.get("status"), "SPAM")
        );
    }

    private static Predicate getDeleted(CriteriaBuilder criteriaBuilder, Root<Message> root) {
        return criteriaBuilder.or(
                criteriaBuilder.isNull(root.get("status")),
                criteriaBuilder.equal(root.get("status"), "DELETE")
        );
    }
}
